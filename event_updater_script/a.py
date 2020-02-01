import requests
import csv
from copy import deepcopy as dc

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

COLLECTION = "test"
DRIVE_CDN_BASE = "https://drive.google.com/uc?export=view&id="

def setToFirebase(data, headings, db):
    set_data = dict(zip(headings, data))

    # proc POCs
    tmp = []
    for i in range(len(set_data["POCs"])):
        if len(set_data["POCs"][i])!=1: 
            lis = map(lambda a: a.strip().strip('\n'), set_data["POCs"][i].split(','))
            tmp.append(dict(zip(["Name", "Phone"], lis)))
    set_data["POCs"] = tmp

    # proc link
    link = set_data["Image Poster Link"]
    link = DRIVE_CDN_BASE + link.split("=")[1]
    set_data["Image Poster Link"] = link

    #send to firebase
    doc = db.collection(COLLECTION).document(set_data['Name'])
    doc.set(set_data)
    print(f"{set_data['Name']} added to firebase")

if __name__ == '__main__':
    cred = credentials.Certificate("./key.json")
    firebase_admin.initialize_app(cred)
    db = firestore.client()
    url = "https://docs.google.com/spreadsheets/d/1eWzh02AwnjENqxhfMH27NO3lOLmmidAeDdcUhTok4Ls/export?format=csv&id=1eWzh02AwnjENqxhfMH27NO3lOLmmidAeDdcUhTok4Ls&gid=775450067"
    r = requests.get(url)

    with open("latest_events.csv", "w") as fil:
        fil.write(r.text)

    reader = None
    with open("latest_events.csv", "r") as fil:
        reader = csv.reader(fil, quotechar='"')

        idx = 0
        headings = None
        for row in reader:
            if idx==0: 
                headings = row[:7]
                headings.append("POCs")
                headings = headings + row[9:]

            else:
                cur_row = row[:7]
                cur_row.append(row[7:9])
                cur_row = cur_row + row[9:]
                try:
                    setToFirebase(cur_row, headings, db)
                except Exception as e:
                    print(e)

            idx += 1
        
        print(f"{idx-1} events processed")



#!/bin/bash

if [ $# -lt "1" ]
then
    echo "input the proper sleep time"
    exit
fi


while [ true ]
do 
    python3 a.py 
    sleep $1
done

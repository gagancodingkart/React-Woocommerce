import React, { Component } from 'react';
import { BaseUrl } from "./../Config.js";

export function postData(url, request_data ){
    return new Promise((resolve, reject) => {
        fetch(BaseUrl + url, {
            method: "POST",
            body: JSON.stringify(request_data),
            headers: {'Content-Type':'application/json'},
        }).then((response) => response.json())
                .then((responseJson) => {
                   
                    resolve(responseJson);
                })
                .catch((error) => {
                    reject(error);
                    console.error(error);
                });
    });
}

export function getData(url){
    var jwt = 'cs_069ce05d83a89152f983fcdd2d4460c213256009';
    var cons = "ck_03e83242fdcbb62a01daebe9c4817741f4c18a36";
     return new Promise((resolve, reject) => {
         fetch(BaseUrl + url, {
             method: "GET",
             headers: {
                 'Content-Type':'application/json',
                 'Authorization': 'Basic ' + btoa(cons+':'+jwt),
                },
         }).then((response) => response.json())
                 .then((responseJson) => {
                    
                     resolve(responseJson);
                 })
                 .catch((error) => {
                     reject(error);
                     console.error(error);
                 });
     });
 }
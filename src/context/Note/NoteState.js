import React from 'react';
import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {

    const noteS = [
      {
        "_id": "65e4b1bef405f3f1c11ac9214",
        "title": "My First Note 😎",
        "description": "All is well!",
        "tag": "Confidential",
        "author": {
          "_id": "65e468f581d61d5145c43519",
          "name": "Hatif",
          "email": "hatifkhuld14@gmail.com",
          "mobile": "0123456789",
          "password": "$2b$10$/GrC1WzOR7DCk1qDMnkOgeOA.e2ByB/zUomHyxtoMQ6ApxEVQNZSS",
          "createdAt": "2024-03-03T12:11:33.937Z",
          "updatedAt": "2024-03-03T12:11:33.937Z",
          "__v": 0
        },
        "createdAt": "2024-03-03T17:22:06.685Z",
        "updatedAt": "2024-03-04T05:52:41.540Z",
        "__v": 0
      },
      {
        "_id": "65edddf584f7b9f51116e0665",
        "title": "My To-Do(s) for 11th March",
        "description": "I have to do a no. of jobs including bathing, travelling, eating etc.",
        "tag": "General",
        "author": {
          "_id": "65e468f581d61d5145c43519",
          "name": "Hatif",
          "email": "hatifkhuld14@gmail.com",
          "mobile": "0123456789",
          "password": "$2b$10$/GrC1WzOR7DCk1qDMnkOgeOA.e2ByB/zUomHyxtoMQ6ApxEVQNZSS",
          "createdAt": "2024-03-03T12:11:33.937Z",
          "updatedAt": "2024-03-03T12:11:33.937Z",
          "__v": 0
        },
        "createdAt": "2024-03-10T16:21:09.382Z",
        "updatedAt": "2024-03-10T16:21:09.382Z",
        "__v": 0
      },
      {
        "_id": "65e4b1bef405f3f1c11ac9210",
        "title": "My First Note 😎",
        "description": "All is well!",
        "tag": "Confidential",
        "author": {
          "_id": "65e468f581d61d5145c43519",
          "name": "Hatif",
          "email": "hatifkhuld14@gmail.com",
          "mobile": "0123456789",
          "password": "$2b$10$/GrC1WzOR7DCk1qDMnkOgeOA.e2ByB/zUomHyxtoMQ6ApxEVQNZSS",
          "createdAt": "2024-03-03T12:11:33.937Z",
          "updatedAt": "2024-03-03T12:11:33.937Z",
          "__v": 0
        },
        "createdAt": "2024-03-03T17:22:06.685Z",
        "updatedAt": "2024-03-04T05:52:41.540Z",
        "__v": 0
      },
      {
        "_id": "65edddf584f7b9f51116e0661",
        "title": "My To-Do(s) for 11th March",
        "description": "I have to do a no. of jobs including bathing, travelling, eating etc.",
        "tag": "General",
        "author": {
          "_id": "65e468f581d61d5145c43519",
          "name": "Hatif",
          "email": "hatifkhuld14@gmail.com",
          "mobile": "0123456789",
          "password": "$2b$10$/GrC1WzOR7DCk1qDMnkOgeOA.e2ByB/zUomHyxtoMQ6ApxEVQNZSS",
          "createdAt": "2024-03-03T12:11:33.937Z",
          "updatedAt": "2024-03-03T12:11:33.937Z",
          "__v": 0
        },
        "createdAt": "2024-03-10T16:21:09.382Z",
        "updatedAt": "2024-03-10T16:21:09.382Z",
        "__v": 0
      },
      {
        "_id": "65e4b1bef405f3f1c11ac9212",
        "title": "My First Note 😎",
        "description": "All is well!",
        "tag": "Confidential",
        "author": {
          "_id": "65e468f581d61d5145c43519",
          "name": "Hatif",
          "email": "hatifkhuld14@gmail.com",
          "mobile": "0123456789",
          "password": "$2b$10$/GrC1WzOR7DCk1qDMnkOgeOA.e2ByB/zUomHyxtoMQ6ApxEVQNZSS",
          "createdAt": "2024-03-03T12:11:33.937Z",
          "updatedAt": "2024-03-03T12:11:33.937Z",
          "__v": 0
        },
        "createdAt": "2024-03-03T17:22:06.685Z",
        "updatedAt": "2024-03-04T05:52:41.540Z",
        "__v": 0
      },
      {
        "_id": "65edddf584f7b9f51116e0663",
        "title": "My To-Do(s) for 11th March",
        "description": "I have to do a no. of jobs including bathing, travelling, eating etc.",
        "tag": "General",
        "author": {
          "_id": "65e468f581d61d5145c43519",
          "name": "Hatif",
          "email": "hatifkhuld14@gmail.com",
          "mobile": "0123456789",
          "password": "$2b$10$/GrC1WzOR7DCk1qDMnkOgeOA.e2ByB/zUomHyxtoMQ6ApxEVQNZSS",
          "createdAt": "2024-03-03T12:11:33.937Z",
          "updatedAt": "2024-03-03T12:11:33.937Z",
          "__v": 0
        },
        "createdAt": "2024-03-10T16:21:09.382Z",
        "updatedAt": "2024-03-10T16:21:09.382Z",
        "__v": 0
      }
    ]
      
      const [note, setNote] = useState(noteS)

    return (
        <NoteContext.Provider value={{note, setNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
```mermaid

sequenceDiagram
    participant user
    participant browser
    participant server
    
    user->>browser: Write a new note in the input field
    user->>browser: Click the "Save" button
    Note right of browser: The browser creates a new note object
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: The server receives the new note data and saves it
    server-->>browser: HTTP status code 302 (URL redirect to /notes)
    deactivate server
    
    Note right of browser: The browser reloads the Notes page
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2024-06-14" }, ... ]
    Note right of server: The server sends an array of objects containing all notes, including the new note
    deactivate server
    
    Note right of browser: The browser executes the callback function that renders the notes, including the new note

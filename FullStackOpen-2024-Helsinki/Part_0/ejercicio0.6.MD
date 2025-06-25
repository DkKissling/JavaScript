```mermaid

sequenceDiagram
    participant user as User
    participant browser as Browser
    participant server as Server
   
    user->>browser: Enter new note in text field and click "Save"
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP status code 201 Created
    Note right of server: Server receives and processes the new note
    deactivate server
    
    Note right of browser: SPA updates and displays the new note
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Updated JSON data with new note
    deactivate server
    
    Note right of browser: Browser executes callback to render updated notes


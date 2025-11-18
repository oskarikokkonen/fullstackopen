sequenceDiagram
    participant browser
    participant server

    browser->>browser: User writes note and submits form
    browser->>browser: JS prevents default, adds note to list, clears input

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with JSON
    activate server
    server-->>server: Server stores note with timestamp
    server-->>browser: 201 Created (no redirect)
    deactivate server

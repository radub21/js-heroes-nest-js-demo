```mermaid
erDiagram
    COMEDIAN ||--o{ JOKE : creates
    COMEDIAN {
        string id PK
        string name
        date birth_date
        string bio
    }
    JOKE }|--|| SHOW_PERFORMANCE : performed_in
    JOKE {
        string id PK
        string comedian_id FK
        text content
    }
    SHOW_PERFORMANCE {
        string id PK
        string joke_id FK
        string comedian_id FK
        date performance_date
        string venue
        integer audience_size
    }
```

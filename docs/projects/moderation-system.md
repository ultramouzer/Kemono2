# Moderation System

## Table of contents
- [Core information](#core-information)

## Interfaces
```typescript
interface Moderator {
  user_id: string
  added: Date | string
}
```

## Core information
The moderation system allows certain users ("moderators") chosen by the administrator user to review manually uploaded files shared to the instance to prevent spam and abuse.
### Process
1. On initialization, the software creates a default user with a generic password. THe administrator logs in and changes the password.
2. The moderators make their own accounts.
3. In a private panel locked behind a login, the administrator assigns moderator "roles" to those accounts, giving them access to the "moderation dashboard."
4. The moderators then log in to their moderation dashboard, and can review uploaded files, either approving them for public access or discarding them.
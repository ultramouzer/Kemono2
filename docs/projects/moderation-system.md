# Moderation System

## Table of contents
- [Interfaces](#interfaces)
- [Core information](#core-information)
- [Process](#process)
- [Issues](#issues)

## Interfaces
```typescript
interface Administrator  extends User {
  role: "administrator"
}

interface Moderator  extends User {
  role: "moderator"
}

interface Notification {
  date_created: Date | string
}
```

## Core information
The moderation system allows certain users ("moderators") chosen by the administrator user to perform various administrative tasks.

## Process
### Administrator
1. On initialization, the software creates a default user with a generic password. The administrator logs in and changes the password.
2. At `/admin` the administrator arrives to the admin dashboard.
3. At `/admin/accounts` the administrator can change the roles of accounts, which then gets sent to `POST` `/admin/accounts`.
3. Presumably the role change will result in notifications to related accounts.

### Moderator
1. When the role of an account changes to `moderator`, the account gets notified of this.
2. The account then can access `/mod` endpoint, which leads to the moderator dashboard. On this page the mod can see various stats, among them is the list of various tasks.

## Issues

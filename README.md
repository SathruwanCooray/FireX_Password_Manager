# Password Manager [React, Tailwind CSS, AntDesign]

## PREVIEW
[Preview Link](https://github.com/SathruwanCooray/FireX_Password_Manager/assets/150252729/4490a1a3-7592-4984-9bdf-40db39c1f3c9)

## Features

### Password Management
- **Add Password:** Users can add new passwords for different accounts.
  - Website
  - Email Address
  - Password
  - Notes [Coming Soon]
- **View Passwords:** Users can view their stored passwords in a secure manner.
- **Delete Passwords:** Users can remove passwords they no longer need.

### Security
- **Encryption:** All passwords are encrypted before being stored locally.
- **Auto-logout:** Session timeout for added security.

### User Interface
- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Dark Mode:** Toggle between light and dark themes for comfortable viewing.

## Implementation

### 1. Technology Stack
- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **UI Components:** Ant Design
- **State Management:** React Hooks (useState, useEffect)

### 2. Local Storage
- Utilizes browser's local storage for data persistence.
- Implements encryption for stored data.

### 3. Password Management Pages
- **Add Password Page**
  - Form to collect account name, username, password, and optional notes
- **View Passwords Page**
  - List view of all stored passwords
  - Option to reveal/hide passwords
- **Edit Password Page**
  - Similar to Add Password Page, but pre-filled with existing data
 
## Screenshots

![Website preview](https://imgur.com/BM625pn)

*Screenshot of the Password Manager*

![Website preview](https://imgur.com/ENeaOgU)

*Screenshot of the Password Manager with items added*

## Installation and Setup

1. Clone the repository:
`git clone https://github.com/SathruwanCooray/FireX_Password_Manager.git`
2. Navigate to the project directory:
`cd FireXPasswordManager`
3. Install dependencies:
`npm install`
Copy
4. Start the development server:
`npm run dev`

## Future Enhancements

- Password strength indicator
- Option to generate strong passwords
- Clipboard clearing after password copy
- Two-factor authentication
- Cloud sync option
- Password sharing feature
- Browser extension for easy access

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

# Password Manager [React, Tailwind CSS, AntDesign]

This Password Manager is built using React for a dynamic user interface, Tailwind CSS for modern styling, and Ant Design components for enhanced functionality. It provides a secure platform for users to manage and store their passwords and sensitive information efficiently. The application ensures data security through encryption and offers a user-friendly experience with intuitive navigation and responsive design. Ideal for users seeking a reliable solution to organize and protect their digital credentials.

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

![Website preview](https://github.com/SathruwanCooray/FireX_Login_System/assets/150252729/7f917cc9-291f-40a3-972a-1e22fe111ba7)

*Screenshot of the Password Manager*

![Website preview](https://github.com/SathruwanCooray/FireX_Login_System/assets/150252729/3538b026-9bce-4861-9a12-289877388116)

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
- Mobile Configuration ✅
- Option to generate strong passwords
- Clipboard password copy ✅
- Two-factor authentication
- Cloud sync option
- Password sharing feature
- Browser extension for easy access

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

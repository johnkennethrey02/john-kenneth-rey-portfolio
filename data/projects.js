/**
 * Portfolio projects.
 * - `links.code`: GitHub repo URL → shows a "Source code" button (null = hidden).
 * - `links.demo`: live website URL → shows a "Live demo" button (optional).
 * - `images`: shown in the card and in the full-screen viewer. Empty = designed placeholder.
 * - `featured: true` renders the project as the large card at the top.
 */

import fcLogin from '../assets/projects/forgecast/01-login.jpg'
import fcDashboard from '../assets/projects/forgecast/02-dashboard.jpg'
import fcPos from '../assets/projects/forgecast/03-pos.jpg'
import fcProducts from '../assets/projects/forgecast/04-products.jpg'
import fcAddProduct from '../assets/projects/forgecast/05-add-product.jpg'
import fcImport from '../assets/projects/forgecast/06-import-products.jpg'
import fcStock from '../assets/projects/forgecast/07-stock.jpg'
import fcCategories from '../assets/projects/forgecast/08-categories.jpg'
import fcPurchaseOrders from '../assets/projects/forgecast/09-purchase-orders.jpg'
import fcStockReceiving from '../assets/projects/forgecast/10-stock-receiving.jpg'
import fcMovements from '../assets/projects/forgecast/11-movements.jpg'
import fcTransactions from '../assets/projects/forgecast/12-transactions.jpg'
import fcReturns from '../assets/projects/forgecast/13-returns.jpg'
import fcReturnReports from '../assets/projects/forgecast/14-return-reports.jpg'
import fcExpenses from '../assets/projects/forgecast/15-expenses.jpg'
import fcFinancial from '../assets/projects/forgecast/16-financial-report.jpg'

import saTopology from '../assets/projects/sysadmin/topology.jpg'
import saHrWallpaper from '../assets/projects/sysadmin/hr-wallpaper.jpg'
import saItWallpaper from '../assets/projects/sysadmin/it-wallpaper.jpg'
import saControlPanel from '../assets/projects/sysadmin/control-panel-blocked.jpg'
import saNetAccounts from '../assets/projects/sysadmin/net-accounts.jpg'
import saAccessDenied from '../assets/projects/sysadmin/access-denied.jpg'
import saAdUsers from '../assets/projects/sysadmin/ad-users.jpg'
import saPermissions from '../assets/projects/sysadmin/ntfs-permissions.jpg'
import saPasswordPolicy from '../assets/projects/sysadmin/password-policy.jpg'

import enLogin from '../assets/projects/enrollment/01-login.jpg'
import enStudent from '../assets/projects/enrollment/02-student.jpg'
import enSignup from '../assets/projects/enrollment/03-signup.jpg'
import enAdmin from '../assets/projects/enrollment/04-admin.jpg'
import enBackup from '../assets/projects/enrollment/05-backup.jpg'

import fhProducts from '../assets/projects/fashionhouse/products.jpg'
import fhCart from '../assets/projects/fashionhouse/cart.jpg'
import fhHistory from '../assets/projects/fashionhouse/history.jpg'
import fhTrash from '../assets/projects/fashionhouse/trash.jpg'
import fhAbout from '../assets/projects/fashionhouse/about.jpg'

import crMainForm from '../assets/projects/car-rental/main-form.jpg'
import crRecords from '../assets/projects/car-rental/records.jpg'

export const projects = [
  {
    id: 'forgecast',
    featured: true,
    title: 'ForgeCast',
    subtitle: 'POS & Inventory Management System with Sales Prediction',
    label: 'Capstone Project',
    role: 'Project Manager',
    description:
      'A web-based point-of-sale and inventory management system with sales prediction, developed as our capstone project for NAPAO Trading, a hardware business that handles both retail and wholesale transactions.',
    highlights: [
      'Led a five-member team through the system development lifecycle, coordinating frontend, backend, QA, and documentation work.',
      'Served as the link between the client and the development team, translating business requirements into technical specifications.',
      'Produced the system design documentation: process flows, system architecture, data flow diagrams, and use case diagrams.',
      'Features retail and wholesale POS, inventory and purchase order management, financial reporting, and an SVC-based model that classifies next-day sales as High, Mid, or Low.',
      'Evaluated using ISO/IEC 25010 and the Technology Acceptance Model, both rated Acceptable.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP', 'Agile', 'SVC'],
    images: [
      // Ordered like the real user flow: sign in → manager screens (sidebar order) → cashier screens
      { src: fcLogin, alt: 'Sign-in page' },
      { src: fcDashboard, alt: 'Manager dashboard with sales trend, forecast, quick actions, and stock alerts' },
      { src: fcProducts, alt: 'Inventory › Products: product management with search, filters, and status overview' },
      { src: fcAddProduct, alt: 'Inventory › Products: Add Product form with a live pricing preview' },
      { src: fcImport, alt: 'Inventory › Products: bulk import using a CSV template' },
      { src: fcStock, alt: 'Inventory › Stock: stock monitoring with restock levels and stock status' },
      { src: fcCategories, alt: 'Inventory › Categories: category management' },
      { src: fcPurchaseOrders, alt: 'Purchase Orders: purchase order management' },
      { src: fcStockReceiving, alt: 'Stock Receiving: receiving stock for submitted purchase orders' },
      { src: fcMovements, alt: 'Movements: inventory log for sales, returns, and stock adjustments' },
      { src: fcReturnReports, alt: 'Reports › Returns: return report with restock status' },
      { src: fcFinancial, alt: 'Reports › Financial: income statement with gross sales, returns, cost of goods sold, and net income' },
      { src: fcExpenses, alt: 'Expenses: expense recording and monitoring' },
      { src: fcPos, alt: 'Cashier › Point of Sale: retail and wholesale modes with Cash, GCash, or Card payment' },
      { src: fcTransactions, alt: 'Cashier › Transactions: history for retail, wholesale, and returns' },
      { src: fcReturns, alt: 'Cashier › Returns: product returns by receipt number' },
    ],
    links: { code: null },
  },
  {
    id: 'sysadmin',
    title: 'Active Directory & Group Policy Deployment',
    subtitle: 'Corporate domain environment for ForgeCast Trading',
    label: 'Systems Administration',
    description:
      'A virtualized corporate network for ForgeCast Trading, a hardware and construction supply company with five departments, built with Windows Server 2022 and Windows 10 Pro in Oracle VirtualBox.',
    highlights: [
      'Set up a Windows Server 2022 domain controller (forgecast.local) with AD DS and DNS on a static-IP VirtualBox NAT network.',
      'Joined five Windows 10 Pro department workstations to the domain.',
      'Created five department OUs, ten domain users, and five security groups.',
      'Applied department wallpapers and restrictions through Group Policy, plus a domain password and account lockout policy.',
      'Secured department shared folders with share and NTFS permissions, and verified both allowed and denied access.',
    ],
    tags: ['Windows Server 2022', 'Active Directory', 'DNS', 'Group Policy', 'NTFS Permissions', 'VirtualBox'],
    images: [
      { src: saTopology, alt: 'Network topology: SERVER01 domain controller and five department workstations on a VirtualBox NAT network' },
      { src: saAdUsers, alt: 'Active Directory Users and Computers showing the department OUs' },
      { src: saHrWallpaper, alt: 'Human Resources wallpaper applied through Group Policy' },
      { src: saItWallpaper, alt: 'IT Department wallpaper applied through Group Policy' },
      { src: saControlPanel, alt: 'Control Panel blocked for an HR user by Group Policy' },
      { src: saPasswordPolicy, alt: 'Domain password policy in the Group Policy Management Editor' },
      { src: saNetAccounts, alt: 'net accounts /domain confirming the password and lockout policy from a workstation' },
      { src: saPermissions, alt: 'NTFS permissions on the department shared folder' },
      { src: saAccessDenied, alt: 'Access denied when an HR user opens the Finance share' },
    ],
    links: { code: null },
  },
  {
    id: 'enrollment',
    title: 'Enrollment System with Scheduling',
    subtitle: 'C# Desktop Application with MySQL',
    label: 'Application Development',
    role: 'Solo Developer',
    description:
      'A Windows desktop enrollment system built solo in C# with a MySQL database. Students create an account, wait for admin approval, complete their profile, and enroll in subjects by course, year level, section, and semester. Built as an academic project.',
    highlights: [
      'Login and sign-up with admin and user roles, plus an admin approval workflow: approve, reject, switch role, or remove accounts.',
      'Printable account reports: all, approved, rejected, and pending.',
      'Deleted accounts are kept in a backup, where they can be restored or permanently deleted.',
      'Student profile with photo upload and editable, printable personal information.',
      'Subject enrollment by course, year level, section, and semester, with enrolled subjects shown in a table.',
      'All database queries are parameterized to guard against SQL injection.',
    ],
    tags: ['C#', 'Windows Forms', '.NET Framework', 'MySQL', 'XAMPP'],
    images: [
      { src: enLogin, alt: 'Login screen' },
      { src: enStudent, alt: 'Student form: profile, photo, subject enrollment, and enrolled subjects table' },
      { src: enSignup, alt: 'Sign-up form with role selection' },
      { src: enAdmin, alt: 'Admin panel: approve, reject, switch role, remove accounts, and print reports' },
      { src: enBackup, alt: 'Backup of deleted accounts with restore and delete' },
    ],
    links: { code: null },
  },
  {
    id: 'fashionhouse',
    title: 'FashionHouse',
    subtitle: 'E-commerce Clothing System',
    label: 'Web Development',
    description:
      'A front-end e-commerce clothing store built with vanilla JavaScript that covers the shopping flow from browsing products to checkout, with an order history and a trash for removed transactions.',
    highlights: [
      'Product catalog with live search and search suggestions.',
      'Cart with quantity controls, order cancellation, and a running total.',
      'Checkout that saves each order as a receipt in the purchase history.',
      'Past orders can be edited or cancelled; removed orders go to a trash with restore and permanent delete.',
      'Built without frameworks: HTML, CSS, and vanilla JavaScript.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    images: [
      { src: fhProducts, alt: 'FashionHouse product catalog' },
      { src: fhCart, alt: 'FashionHouse shopping cart' },
      { src: fhHistory, alt: 'FashionHouse purchase history' },
      { src: fhTrash, alt: 'FashionHouse trash with restore and delete' },
      { src: fhAbout, alt: 'FashionHouse About Us page' },
    ],
    links: { code: null },
  },
  {
    id: 'car-rental',
    title: 'Car Rental System',
    subtitle: 'Java Desktop CRUD Application',
    label: 'Application Development',
    description: 'A standalone Java desktop application for managing car rental records.',
    highlights: [
      'Create, read, update, and delete rental records through a Java GUI.',
      'Captures customer details, vehicle, and rental time, and computes the total cost.',
      'Stores records through a text-file workflow.',
      'Developed in NetBeans.',
    ],
    tags: ['Java', 'NetBeans', 'File I/O'],
    images: [
      { src: crMainForm, alt: 'Car Rental System main form' },
      { src: crRecords, alt: 'Car Rental System records window' },
    ],
    links: { code: null },
  },
  {
    id: 'selenium',
    title: 'Selenium Testing',
    subtitle: 'Software Testing',
    label: 'Software Testing',
    description:
      'Hands-on experience with Selenium IDE, following software testing procedures and preparing test documentation with expected and actual results.',
    highlights: [
      'Used Selenium IDE for browser-based testing.',
      'Followed basic software testing procedures.',
      'Prepared test documentation comparing expected and actual results.',
    ],
    tags: ['Selenium IDE', 'Test Documentation'],
    images: [],
    placeholder: 'testing',
    links: { code: null },
  },
]

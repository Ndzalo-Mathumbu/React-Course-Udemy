# The Wild Oasis

A modern cabin reservation platform built with Next.js that allows users to explore cabins, authenticate with Google, and manage full reservation workflows, including creation, editing, and deletion. The app uses server-side actions, Supabase, and React patterns.

---

## Features

### Authentication & Users
- Google authentication using NextAuth
- Protected account area
- Guest profile creation on first login
- Session enrichment with guest data
- User avatar and profile display

### Cabin & Booking System
- Browse available cabins dynamically
- Detailed cabin pages with booking form
- Date range selection with validation
- Automatic price calculation

### Reservation Management
- Create reservations linked to authenticated users
- View upcoming and past reservations
- Edit existing reservations
- Delete reservations securely (ownership-based access control)
- Prevent unauthorized access to reservations
- Redirects after successful actions

### Advanced UI/UX
- Optimistic UI updates for deletion (instant feedback)
- Server action feedback handling

### Backend & Security
- Server Actions for secure mutations
- Supabase database integration
- Row-level ownership validation (users can only modify their own bookings)
- Input validation and controlled form handling
- Cache revalidation for fresh UI updates

---

## Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- React Day Picker

### Backend
- Supabase (PostgreSQL)
- Row Level Security (RLS)
- Server-side data mutations

### Authentication
- NextAuth
- Google Provider

## Authentication Flow

1. User signs in with Google  
2. System checks if the guest exists in the database  
3. If not, a new guest record is created  
4. Guest ID is attached to the session  
5. Protected routes become accessible  
6. The user can create and manage reservations  

---

## Reservation Workflow

### Create Booking
- User selects cabin + dates  
- Form submits via Server Action  
- Booking is stored in Supabase  

### Edit Booking
- User updates reservation details  
- Ownership is validated before update  

### Delete Booking
- Only the owner can delete the reservation  
- Optimistic UI removes the item instantly  
- Server confirms deletion  

---

## Security Model

- Users can only access their own reservations  
- Server-side validation prevents unauthorized edits  
- Direct API abuse (e.g., cURL attacks) is blocked via ownership checks  
- Supabase enforces data integrity

## Author

Ndzalo NK Mathumbu

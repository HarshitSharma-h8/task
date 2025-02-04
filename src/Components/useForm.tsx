"use client";
export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import {  usePathname } from "next/navigation";  // For route changes in Next.js

import { TextField, Button, Paper, Box, Typography, Snackbar, Alert } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export default function UserForm() {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  

  // Load data from localStorage on mount
  // useEffect(() => {
  //   const savedData = localStorage.getItem("userForm");
  //   if (savedData) {
  //     setFormData(JSON.parse(savedData));
  //   }
  // }, []);

  // // Save changes to localStorage whenever formData updates
  // useEffect(() => {
  //   localStorage.setItem("userForm", JSON.stringify(formData));
  // }, [formData]);

  // // Warn before closing/refreshing the page
  // useEffect(() => {
  //   const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  //     if (unsavedChanges) {
  //       event.preventDefault();
  //       event.returnValue = "You have unsaved changes. Do you really want to leave?";
  //     }
  //   };
  //   window?.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window?.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [unsavedChanges]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("userForm");
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }
  }, []);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userForm", JSON.stringify(formData));
    }
  }, [formData]);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleBeforeUnload = (event: BeforeUnloadEvent) => {
        if (unsavedChanges) {
          event.preventDefault();
          event.returnValue = "You have unsaved changes. Do you really want to leave?";
        }
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
  
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [unsavedChanges]);
  

  // Warn before navigating to another page in Next.js
  const pathname = usePathname();

useEffect(() => {
  const handleRouteChange = () => {
    if (unsavedChanges) {
      const confirmLeave = window.confirm("You have unsaved changes. Do you really want to leave?");
      if (!confirmLeave) return;
    }
  };

  handleRouteChange(); // Check if user tries to navigate

}, [pathname, unsavedChanges]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUnsavedChanges(true);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.userId) {
      formData.userId = uuidv4(); // Auto-generate user ID
    }

    localStorage.setItem("userForm", JSON.stringify(formData)); // Save data to Local Storage
    setUnsavedChanges(false);
    setOpenSnackbar(true);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 4,
        borderRadius: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        User Data Form
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Name" name="name" variant="outlined" fullWidth value={formData.name} onChange={handleChange} required />
        <TextField label="Address" name="address" variant="outlined" fullWidth value={formData.address} onChange={handleChange} required />
        <TextField label="Email" name="email" variant="outlined" fullWidth type="email" value={formData.email} onChange={handleChange} required />
        <TextField label="Phone" name="phone" variant="outlined" fullWidth type="tel" value={formData.phone} onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>

      {/* Snackbar notification for form submission */}
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </Paper>
  );
}

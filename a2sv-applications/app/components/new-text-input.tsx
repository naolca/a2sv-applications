"use client";
import { Label } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";

import { useAddTextFieldMutation } from "../redux/slices/applications_slice";

import { useState } from "react";

const mappings = {
  inperson: "IP",
  remote: "RE",
  community: "CO",
};

export default function NewTextInput() {
  const [formData, setFormData] = useState({
    label: "",
    example: "",
    forms: ["IP"],
  });

  
  /* use the useAddTextFieldMutation hook to add a new text field to the database */
    const [addTextField, { data, error, isLoading }] = useAddTextFieldMutation();



  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = mappings[e.target.value as keyof typeof mappings];

    let newFor = formData.forms;
    if (newFor.includes(value)) {
      newFor = newFor.filter((item) => item !== value);
    } else {
      newFor.push(value);
    }

    setFormData({ ...formData, forms: newFor });
    console.log(formData);
  }

  function labelChange(e: any): void {
    setFormData({ ...formData, label: e.target.value });
    console.log(formData);
  }

  function exampleChange(e: any): void {
    setFormData({ ...formData, example: "Example: " + e.target.value });
    console.log(formData);
  }

    function handleSubmit(): void {
        console.log(formData);
        addTextField(formData);
    }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
    
        mt: 2,
        padding: 10,
        alignItems: "center",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
        }}
      >
        <FormGroup onChange={labelChange}>
         
          <TextField id="filled-basic" label="Label" variant="standard" />
        </FormGroup>
        <FormGroup onChange={exampleChange}>
   
          <TextField id="filled-basic" label="Example" variant="standard" />
        </FormGroup>
        <FormGroup onChange={handleCheckboxChange}>
          <FormLabel>For</FormLabel>
          {["inperson", "remote", "community"].map((option) => (
            <FormControlLabel
              checked={formData.forms.includes(
                mappings[option as keyof typeof mappings]
              )}
              control={<Checkbox />}
              label={option}
              key={option}
              value={option}
            />
          ))}
        </FormGroup>
        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "lightgray",
          }}
          onClick={handleSubmit}
        >
          Create Field
        </Button>
      </FormControl>
    </Box>
  );
}

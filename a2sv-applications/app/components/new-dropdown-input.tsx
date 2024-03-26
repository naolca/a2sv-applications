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
import MultipleInputs from "./multiple-input";

import { useAddDropdownFieldMutation } from "../redux/slices/applications_slice";

import { useState } from "react";

const mappings = {
  inperson: "IP",
  remote: "RE",
  community: "CO",
};

export default function NewDropdownInput() {
  const [choicesdata, setChoicesData] = useState([""]);

  const [addDropdownField, { data, error, isLoading }] =
    useAddDropdownFieldMutation();

  const [formData, setFormData] = useState({
    label: "",
    choices: [],
    forms: ["IP"],
  });

  const handleSubmit = () => {
    addDropdownField(formData);
  };
  const handleChangechoices = (choices: any) => {
    setChoicesData(choices);
    //   console.log("changed choices");
    setFormData({ ...formData, choices: choices });
  };

  function labelChange(e: any): void {
    setFormData({ ...formData, label: e.target.value });
    console.log(formData);
  }
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        minHeight: "xl",
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
          height: "100%",
          width: "100%",
        }}
      >
        <FormGroup
          onChange={labelChange}
          sx={{
            minHeight: "xl",
            display: "flex",
          }}
        >
          <TextField id="filled-basic" label="Label" variant="standard" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="filled-basic">Choices</FormLabel>
          <MultipleInputs onchanges={handleChangechoices} />
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
          onClick={handleSubmit}
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "lightgray",
          }}
        >
          Create Field
        </Button>
      </FormControl>
    </Box>
  );
}

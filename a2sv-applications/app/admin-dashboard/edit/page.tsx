'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import NewTextInput from '@/app/components/new-text-input';
import NewDropdownInput from '@/app/components/new-dropdown-input';
import NewRadioInput from '@/app/components/new-radio-input';
export default function EditForms() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };

    return (
        <Container maxWidth="xl">
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Text Input" />
                <Tab label="Dropdown" />
                <Tab label="Radio" />
              </Tabs>
            </Box>

            <Box>
                {value === 0 && <NewTextInput />}
                {value === 1 && <NewDropdownInput />}
                {value === 2 && <NewRadioInput />}
            </Box>
        </Container>
          
    );
}




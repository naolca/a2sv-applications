import {
    Chip,
      FormControl,
      Input,
      makeStyles,
  } from "@material-ui/core";
  import React, { useEffect, useState } from "react";

  
  
  export default function MultipleInputs({onchanges}:{onchanges:any}) {
      const classes = useStyles();
      const [values, setValues] = useState(["test"]);
      const [currValue, setCurrValue] = useState("");
  
      const handleKeyUp = (e:any) => {
          console.log(e.keyCode);
          if (e.keyCode == 13) {
              setValues((oldState) => [...oldState, e.target.value]);
              setCurrValue("");
          }
          if (onchanges) {
            onchanges(values);
          }
      };
  
      useEffect(() => {
          if (onchanges) {
            onchanges(values);
          }
      }, [values]);
  
      const handleChange = (e:any) => {
          setCurrValue(e.target.value);
    };
    
    const handleDelete = ( item:any, index:any) =>{
      let arr = [...values]
      arr.splice(index,1)
      console.log(item)
      setValues(arr)
      if (onchanges) {
        onchanges(arr);
      }

    }
  
      return (
          <div className="App">
              <FormControl classes={{ root: classes.formControlRoot }}>
                  <div className={"container"}>
                      {values.map((item,index) => (
                          <Chip  size="small" onDelete={()=>handleDelete(item,index)} label={item}/>
                      ))}
                  </div>
                  <Input
                      value={currValue}
                      onChange={handleChange}
                      onKeyDown={handleKeyUp}
                  />
              </FormControl>
          </div>
      );
  }
  
  const useStyles = makeStyles((theme) => ({
      formControlRoot: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "300px",
          flexWrap: "wrap",
      flexDirection: "row",
      border:'2px solid lightgray',
      padding:4,
      borderRadius:'4px',
          "&> div.container": {
              gap: "6px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
          },
          "& > div.container > span": {
              backgroundColor: "gray",
              padding: "1px 3px",
              borderRadius: "4px"
          }
      }
  }));
  
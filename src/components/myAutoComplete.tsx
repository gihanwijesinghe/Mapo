import { Grid } from "@mui/material";
import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export interface MyAutoCompleteProps {
  onAddressSelect: (address: string) => void;
}
const MyAutoComplete: React.FC<MyAutoCompleteProps> = (props) => {
  const handleAddress = (description: any) => {
    props.onAddressSelect(description.description);
  };

  return (
    <Grid container>
      <Grid item>Seach for place</Grid>
      <Grid item>
        <GooglePlacesAutocomplete
          debounce={800}
          apiKey="AIzaSyCXd1VuMwPQbNyTFRBpp-JPgWhikTYyjko"
          onSelect={handleAddress}
          renderSuggestions={(
            active: number,
            suggestions: any[],
            onSelectSuggestion: (selection: any, event: any) => void
          ) => (
            <div className="suggestions-container">
              {suggestions.map((suggestion) => (
                <div className="suggestion" onClick={(event) => onSelectSuggestion(suggestion, event)}>
                  {suggestion.description}
                </div>
              ))}
            </div>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default MyAutoComplete;

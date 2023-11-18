import { Grid } from "@mui/material";
import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { MapoAutoCompleteProps } from "../../models/propTypes";
import { GoogleMapsApiKey, GooglePlaceAutoCompleteDebounce } from "../../models/appConstants";

const MapoAutoComplete: React.FC<MapoAutoCompleteProps> = (props) => {
  const { lable, onItemSelect } = props;

  return (
    <Grid container>
      <Grid item>{lable}</Grid>
      <Grid item>
        <GooglePlacesAutocomplete
          debounce={GooglePlaceAutoCompleteDebounce}
          apiKey={GoogleMapsApiKey}
          onSelect={onItemSelect}
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

export default MapoAutoComplete;

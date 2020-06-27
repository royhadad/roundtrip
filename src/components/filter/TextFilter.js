import React from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import styles from '../../styles/MaterialUiStyles';
import resources from '../../resources/components/filter.json';

const TextFilter = ({ text, setTextFilter, classes }) => (
    <div className='text-filter-container'>
        <TextField
            value={text}
            onChange={(e) => setTextFilter(e.target.value)}
            classes={{ root: classes.textFilter }}
            InputProps={{
                disableUnderline: true,
                className: classes.textFilterInput,
                endAdornment: (
                    <InputAdornment>
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
            placeholder={resources.textFilterPlaceholder}
        />
    </div>
)

export default withStyles(styles)(TextFilter)
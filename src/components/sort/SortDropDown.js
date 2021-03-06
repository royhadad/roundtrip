import React from 'react';
import { Select, MenuItem, InputLabel, withStyles } from '@material-ui/core';
import styles from '../../styles/MaterialUiStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import resources from '../../resources/components/sort.json';

const SortDropDown = ({ sortOptions, selectedSortObject, setSortObject, classes }) => {
    const selectedSortObjectIndex = sortOptions.reduce((selectObjectIndex, sortOption, currentIndex) => {
        return selectedSortObject.equals(sortOption.sortObject) ? currentIndex : selectObjectIndex;
    }, -1);

    return (
        <div className='sort-dropdown-container'>
            <InputLabel className='sort-dropdown-label'>{resources.sortBy}</InputLabel>
            <Select
                onChange={(e) => setSortObject(sortOptions[e.target.value].sortObject)}
                value={selectedSortObjectIndex}
                className='sort-dropdown'
                IconComponent={ExpandMoreIcon}
                classes={{ root: classes.dropDown }}
                MenuProps={{
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "right"
                    },
                    transformOrigin: {
                        vertical: "top",
                        horizontal: "right"
                    },
                    getContentAnchorEl: null,
                }}
            >
                {
                    sortOptions.map((sortOption, index) => (
                        <MenuItem
                            value={index}
                            key={index}
                        >
                            <span>{sortOption.text}</span>
                        </MenuItem>
                    ))
                }
            </Select>
        </div>
    )
}

export default withStyles(styles)(SortDropDown);
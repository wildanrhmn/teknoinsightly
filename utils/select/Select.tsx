import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import { CategoryItem } from '@/types/interface';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface CategorySelectionProps {
  categoryData?: CategoryItem[];
  onCategoryChange: (value: number | number[]) => void; 
}

export default function CategorySelection({ onCategoryChange, categoryData }: CategorySelectionProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<number[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedCategory>) => {
    const selectedCategoryIds = event.target.value as number[];
    setSelectedCategory(selectedCategoryIds);
    onCategoryChange(selectedCategoryIds);
  };
  
  return (
    <div>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Category</InputLabel>
        <Select
          multiple
          value={selectedCategory}
          onChange={handleChange}
          input={<OutlinedInput label="Category" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {categoryData?.map((category: any) => (
            <MenuItem key={category.id} value={category.id}>
              <Checkbox checked={selectedCategory?.includes(category.id)} />
              <ListItemText primary={category.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
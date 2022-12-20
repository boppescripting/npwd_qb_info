import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Info } from '../types/info';
import { useInfoValues } from '../atoms/info-atoms';
interface InfoListProps {
    isDarkMode: boolean;
}

export const InfoList: React.FC<InfoListProps> = ({ isDarkMode }) => {
    const info = useInfoValues();

    if (!info || info.length === 0) {
        return (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            height="100%"
          >
            <Typography variant="h6" style={{ fontWeight: 300 }}>
              There was an unexpected error.
            </Typography>
          </Box>
        );
      }

    return (
        <List disablePadding sx={{ overflow: 'auto' }}>
            {info.map((infoItem: Info) => (
                <ListItem key={infoItem.name} divider>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <ListItemText primaryTypographyProps={{ color: isDarkMode ? '#fff' : '#000', fontSize: '17px' }} primary={infoItem.name} secondary={infoItem.description} />
                    </Box>
                </ListItem>
            ))}
        </List>
    );
}
export default InfoList
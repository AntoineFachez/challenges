import Link from 'next/link';

import { cities } from '../../../lib/data';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
export default function Cities() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#33343380',
      }}
    >
      <Typography variant="h2" sx={{ color: 'white' }}>
        Cities
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          // padding: '1rem',
          backgroundColor: '#33343380',
        }}
      ></Box>

      {cities.map((city) => (
        <Box
          key={city.id}
          sx={{
            width: '100%',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <Link href={`cities/${city.slug}`}>
            <Typography variant="h6">{city.name}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

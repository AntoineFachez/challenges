import { useRouter } from 'next/router';
import { cities } from '../../../lib/data';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
export default function City() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }
  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return null;
  }

  return (
    <Box sx={{ width: '100%', padding: '1rem' }}>
      <Link href="/cities">
        <Typography variant="body2">Go to cities</Typography>
      </Link>
      <Typography variant="h2">{city.name}</Typography>
      <Typography variant="body1">{city.description}</Typography>
    </Box>
  );
}

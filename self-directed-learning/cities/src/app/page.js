import { Box } from '@mui/system';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Box sx={{ width: '100%' }}>
      <h1>Welcome to my cities App.</h1>

      <Link href="/cities">Go to cities</Link>
    </Box>
  );
}

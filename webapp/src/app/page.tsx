import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { redirect } from 'next/navigation';
import { getUser } from '@/actions/getUser';

export const dynamic = 'force-dynamic'

export default async function Home() {

  const user = await getUser();

  if (user.role === 'user') {
    redirect('/user')
  } else if (user.role === 'admin') {
    redirect('/admin')
  } else {
    redirect('/login')
  }
}

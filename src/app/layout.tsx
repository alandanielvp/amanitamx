import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Box } from '@mui/material';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

// Setup Roboto font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AMANITA | Artesanía en Barro de Yucatán',
  description:
    'Descubre nuestra colección de ollas de barro artesanales hechas en Yucatán, México.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={roboto.className} style={{ margin: 0 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default',
          }}
        >
          <Navbar />
          <Box
            component='main'
            sx={{
              flexGrow: 1,
            }}
          >
            {children}
          </Box>
          <Footer />
        </Box>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.GPT4SalesConfig = {
                title: "Adrián, tu asistente virtual",
                welcomeMessage: "un saludo de bienvenida más agresivo",
              };
            `,
          }}
        />
        <script
          src='https://api.gpt4sales.ai/widget/chat-widget.js'
          data-bot-id='cm477iluc0001uf2pen7wlf4r'
        />
      </body>
    </html>
  );
}

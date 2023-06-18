tailwind.config = {
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
      extend: {
        colors: {
          dark: '#0f172a',
          primary: '#3b82f6',
          secondary: '#cbd5e1',
          tertiary: '#1e293b',
          page: {
            100: '#323C4D',
            200: '#454E5D',
          },
          code: {
            11 : '#E34F26',
            12 : '#1572B6',
            13 : '#F7DF1E',
            21 : '#7952B3',
            22 : '#06B6D4',
            31 : '#777BB4',
            32 : '#f34f29',
            33 : '#6C78AF',
            41 : '#EF4223',
          }
        },
        screens: {
            '2xl' : '1320px'
        }
      }
    }
  }
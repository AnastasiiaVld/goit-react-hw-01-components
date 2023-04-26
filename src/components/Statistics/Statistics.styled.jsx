import styled from '@emotion/styled';

export const ItemStyled = styled.li`
    background-color: ${({ label }) => {
     switch (label) {
         case 'docx':
             return 'blue';
         case 'pdf':
             return 'purple';
         case 'mp3':
             return 'pink';
         case 'psd':
             return 'green';
         case 'pdf':
             return 'red';
    }
    }
    }
`
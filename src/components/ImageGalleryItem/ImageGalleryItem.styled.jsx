import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  width: 330px;
  height: 210px;

  border-radius: 5px;
  box-shadow: var(--main-shadow);

  overflow: hidden;
  cursor: zoom-in;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  transition: all 300ms ease-in-out;
  filter: grayscale(0.5);

  :hover {
    filter: grayscale(0);
    transform: scale(1.05);
  }
`;

import styled from '@emotion/styled';

export const Header = styled.header`
  margin-bottom: 25px;
  padding: 20px;
  min-width: 100%;

  background-color: var(--bg);

  box-shadow: var(--main-shadow);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 11px 25px;
  width: 400px;

  font-size: 18px;
  color: var(--secondary);

  border: none;
  border-radius: 5px;
  box-shadow: var(--inset-shadow);

  transition: all 300ms ease-in-out;

  :focus {
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;

export const ButtonSubmit = styled.button`
  padding: 10px 25px;

  font-weight: 500;
  font-size: 18px;
  color: var(--accent);

  background-color: transparent;
  border: 1px solid var(--accent);
  border-radius: 5px;

  cursor: pointer;
  box-shadow: var(--main-shadow);

  transition: all 300ms ease-in-out;

  :hover {
    color: var(--bg);
    background-color: var(--accent);
  }

  :focus {
    color: var(--bg);
    background-color: var(--accent);
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;

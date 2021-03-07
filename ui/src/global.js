import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  .ui.menu {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: 1px solid rgba(34,36,38,.50);
  }

  .ui.menu .item {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  small {
    display: block;
  }

  button {
    display: block;
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }

  .ui.button {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }

  .ui.striped.table {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: 1px solid rgba(34,36,38,.50);
  }

  a {
    color: ${({ theme }) => theme.text};
  }

  td,tr {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-right: 1px solid rgba(34,36,38,.50);
  }

  .ui.segment {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .ui.table th {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .ui.table thead th {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-right: 1px solid rgba(34,36,38,.50);
  }

  .ui.table tfoot th{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .ui.toggle.checkbox input:focus:checked~.box:before, .ui.toggle.checkbox input:focus:checked~label:before{
    background-color: MediumSeaGreen !important;
  }

  .ui.toggle.checkbox input:checked~.box:before, .ui.toggle.checkbox input:checked~label:before {
    background-color: MediumSeaGreen !important;
  }

  .ui.modal>.header {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid rgba(34,36,38,.50);
  }

  .ui.modal>.content {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  input {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
`;

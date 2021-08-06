export interface InputStaticProps {
  id: string;
  label: string;
  errorMessage?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}

export interface ErrorProps {
  isError?: boolean;
}

import SiteLayout from './SiteLayout';
import ErrorBoundary, {BreakThings} from "./ErrorBoundary";

const Callout = ({ children }) => (
  <div className="callout">{children}</div>
);

export default function App() {
  return (
    <SiteLayout
      menu={
        <ErrorBoundary>
          <p>Menu</p>
        </ErrorBoundary>
      }
    >
      <ErrorBoundary>
        <Callout>Callout</Callout>
      </ErrorBoundary>
      <ErrorBoundary>
        <h1>Contents</h1>
        <p>this is the main part of the example layout</p>
        <BreakThings />
      </ErrorBoundary>
    </SiteLayout>
  );
}

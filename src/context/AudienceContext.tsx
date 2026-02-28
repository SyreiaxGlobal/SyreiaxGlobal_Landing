import { createContext, useContext, useMemo, useState, useCallback, type ReactNode } from 'react';
import { audienceContent, type AudienceId, type AudienceContent } from '../data/audienceContent';

// ─── Context value shape ─────────────────────────────────────────────────────

interface AudienceContextValue {
  audience: AudienceId;
  setAudience: (id: AudienceId) => void;
  content: AudienceContent;
}

const AudienceContext = createContext<AudienceContextValue | null>(null);

// ─── Provider ────────────────────────────────────────────────────────────────

interface AudienceProviderProps {
  children: ReactNode;
  defaultAudience?: AudienceId;
}

export const AudienceProvider = ({
  children,
  defaultAudience = 'gobiernos',
}: AudienceProviderProps) => {
  const [audience, setAudienceRaw] = useState<AudienceId>(defaultAudience);

  const setAudience = useCallback((id: AudienceId) => {
    setAudienceRaw(id);
  }, []);

  const content = useMemo(() => audienceContent[audience], [audience]);

  const value = useMemo<AudienceContextValue>(
    () => ({ audience, setAudience, content }),
    [audience, setAudience, content],
  );

  return (
    <AudienceContext.Provider value={value}>
      {children}
    </AudienceContext.Provider>
  );
};

// ─── Hook ────────────────────────────────────────────────────────────────────

export const useAudience = (): AudienceContextValue => {
  const ctx = useContext(AudienceContext);
  if (!ctx) {
    throw new Error('useAudience must be used within an <AudienceProvider>');
  }
  return ctx;
};

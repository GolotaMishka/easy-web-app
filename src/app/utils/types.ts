export type LegalEntityDataType = {
  id?: string;
  name?: JSX.Element;
  vatNumber?: JSX.Element | string;
  fiscalYear?: JSX.Element | number;
  period?: JSX.Element | string;
  buildingsEnabled?: JSX.Element | string;
  tenantsEnabled?: JSX.Element | string;
  creditsEnabled?: JSX.Element | string;
  status?: JSX.Element;
  download?: JSX.Element | string;
};

export type LegalEntityRowType = {
  id?: string | number;
  data: LegalEntityDataType;
};

export type AgreementDataType = {
  id?: string;
  name?: JSX.Element;
  totalRentalIncome?: JSX.Element | number;
  accruedRentalIncentive?: JSX.Element | number;
  rentalIncentiveCorrection?: JSX.Element | number;
  documentsCount?: JSX.Element | number;
  lastUpdated?: JSX.Element | string;
  status?: JSX.Element | string;
  error?: JSX.Element | string;
};

export type AgreementRowType = {
  id?: string | number;
  data: AgreementDataType;
};

export type TrialBalanceValueDataType = {
  id?: string;
  account?: JSX.Element | number;
  priorYear?: JSX.Element | string;
  currentYear?: JSX.Element | string;
  description?: JSX.Element | string;
  add?: JSX.Element | string;
  agreementsLinked?: JSX.Element | string;
};

export type TrialBalanceValueRowType = {
  id?: string | number;
  data: TrialBalanceValueDataType;
};

export type ChangeLogDataType = {
  id?: string;
  user?: JSX.Element | string;
  email?: JSX.Element | string;
  message?: JSX.Element | string;
};

export type ChangeLogRowType = {
  id?: string | number;
  data: ChangeLogDataType;
};

export type AgreementsListDataType = {
  id?: string;
  name?: JSX.Element | string;
  type?: JSX.Element | string;
  info?: JSX.Element | string;
  documentsCount?: JSX.Element | string;
  lastUpdated?: JSX.Element | string;
  status?: JSX.Element | string;
  calculationField?: JSX.Element | string;
};

export type AgreementsListRowType = {
  id?: string | number;
  data: AgreementsListDataType;
};

export type SummaryDataType = {
  id?: string;
  class?: JSX.Element | string;
  account?: JSX.Element | number;
  description?: JSX.Element | string;
  currentYear?: JSX.Element | number;
  priorYear?: JSX.Element | number;
  currentYearRecalculation?: JSX.Element | number;
  difference?: JSX.Element | number;
  differencePercentage?: JSX.Element | string;
  exceedsThreshold?: JSX.Element | string;
};

export type SummaryRowType = {
  id?: string | number;
  data: SummaryDataType;
  expandedRows?: Array<{ id?: string | number; data: SummaryDataType }>;
};

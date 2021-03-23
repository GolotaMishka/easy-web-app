/* eslint-disable no-use-before-define */
import { Map, List } from 'immutable';
import * as schema from './schemas';
import API from '../api';

export interface ThunkExtraArguments {
  api?: API;
  schema: typeof schema;
  normalize: (...args: any) => any;
}
export interface IToken {
  isMemberOf: string | string[];
  email: string;
}

export interface IUserDetails {
  role: string;
  email: string;
}

export enum AuditPeriodStatus {
  InPreparation = 'InPreparation',
  InReview = 'InReview',
  Closed = 'Closed',
  Purged = 'Purged',
}

export enum AgreementStatus {
  InProgress = 'InProgress',
  Prepared = 'Prepared',
  Reviewed = 'Reviewed',
}

export enum UserRole {
  Organizer = 'Organizer',
  Auditor = 'Auditor',
  Reviewer = 'Reviewer',
  Admin = 'Admin',
}

export enum AgreementType {
  Building = 'Building',
  Tenant = 'Tenant',
  Credit = 'Credit',
}

export enum FactSheetType {
  RentalFactSheet = 'RentalFactSheet',
  PurchaseFactSheet = 'PurchaseFactSheet',
  AmortizationScheduleFactSheet = 'AmortizationScheduleFactSheet',
  AdditionToExistingBuildingFactSheet = 'AdditionToExistingBuildingFactSheet',
  FixedInterestRateFactSheet = 'FixedInterestRateFactSheet',
}

export enum DocumentType {
  Agreement = 'Agreement',
}

export interface IEntity {
  id: string;
  inserted: string;
  lastUpdated: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email?: string;
  avatar: string;
}

export interface IClient extends IEntity {
  name: string;
  legalEntities: List<IImmutableLegalEntity>;
}

export interface ILegalEntity extends IEntity {
  name: string;
  vatNumber: string;
  auditPeriods: List<IImmutableAuditPeriod>;
  role: UserRole;
}

export interface ITrialBalanceValueAgreement extends IEntity {
  calculationField: string;
  agreement: IImmutableAgreement;
}

export interface ITrialBalanceValue extends IEntity {
  account: number;
  priorYear: number;
  currentYear: number;
  class: number;
  description: string;
  trialBalanceValueAgreements: List<IImmutableTrialBalanceValueAgreement>;
}

export interface ITrialBalanceDocument extends IEntity {
  user: IImmutableUser;
  trialBalanceValues: List<IImmutableTrialBalanceValue>;
  name: string;
}

export interface IAuditPeriod extends IEntity {
  fiscalYear: number;
  periodFromDate: string;
  periodUntilDate: string;
  status: AuditPeriodStatus;
  buildingsEnabled: boolean;
  tenantsEnabled: boolean;
  creditsEnabled: boolean;
  overallMateriality: number;
  performanceMateriality: number;
  sumMateriality: number;
  buildings: List<IImmutableAgreementGroup>;
  tenants: List<IImmutableAgreementGroup>;
  credits: List<IImmutableAgreementGroup>;
  trialBalanceDocument: IImmutableTrialBalanceDocument;
  readyForClosure: boolean;
  dataExportedDate: string;
  summary: List<IImmutableSummaryEntity>;
}

export interface ISummaryEntity extends IEntity {
  class: number;
  account: number;
  description: string;
  priorYear: number;
  currentYear: number;
  currentYearRecalculation: number;
  difference: number;
  differencePercentage: number;
  exceedsThreshold: boolean;
}

export interface TransformedSummaryEntityType {
  class?: number;
  priorYear?: number;
  currentYear?: number;
  currentYearRecalculation?: number;
  difference?: number;
  differencePercentage?: number;
  nestedItems: Array<ISummaryEntity>;
}

export interface IAgreementGroup extends IEntity {
  name: string;
  type: AgreementType;
  agreementsCount: number;
  address: string;
  agreements: List<IImmutableAgreement>;
}

export interface IAgreement extends IEntity {
  name: string;
  type: AgreementType;
  totalRentalIncome: number;
  accruedRentalIncentive: number;
  rentalIncentiveCorrection: number;
  calculationError: string;
  documentsCount: number;
  status: AgreementStatus;
  documents: List<IImmutableDocument>;
  factSheetType: FactSheetType;
  factSheetId: string;
  changeLogs: List<IImmutableChangeLog>;
}

export interface IDocument extends IEntity {
  name: string;
  reference: string;
  size: number;
  version: string;
  mimeType: string;
  type: DocumentType;
  documentUrl?: string;
}

export interface IChangeLog extends IEntity {
  user: IImmutableUser;
  message: string;
}

export interface IImmutableClient extends Map<string, any> {
  toJS(): IClient;
  get<K extends keyof IClient>(key: K): IClient[K];
}

export interface IImmutableLegalEntity extends Map<string, any> {
  toJS(): ILegalEntity;
  get<K extends keyof ILegalEntity>(key: K): ILegalEntity[K];
}

export interface IImmutableAuditPeriod extends Map<string, any> {
  toJS(): IAuditPeriod;
  get<K extends keyof IAuditPeriod>(key: K): IAuditPeriod[K];
}

export interface IImmutableAgreementGroup extends Map<string, any> {
  toJS(): IAgreementGroup;
  get<K extends keyof IAgreementGroup>(key: K): IAgreementGroup[K];
}

export interface IImmutableAgreement extends Map<string, any> {
  toJS(): IAgreement;
  get<K extends keyof IAgreement>(key: K): IAgreement[K];
}

export interface IImmutableDocument extends Map<string, any> {
  toJS(): IDocument;
  get<K extends keyof IDocument>(key: K): IDocument[K];
}

export interface IImmutableTrialBalanceValue extends Map<string, any> {
  toJS(): ITrialBalanceValue;
  get<K extends keyof ITrialBalanceValue>(key: K): ITrialBalanceValue[K];
}

export interface IImmutableUser extends Map<string, any> {
  toJS(): IUser;
  get<K extends keyof IUser>(key: K): IUser[K];
}

export interface IImmutableChangeLog extends Map<string, any> {
  toJS(): IChangeLog;
  get<K extends keyof IChangeLog>(key: K): IChangeLog[K];
}

export interface IImmutableTrialBalanceDocument extends Map<string, any> {
  toJS(): ITrialBalanceDocument;
  get<K extends keyof ITrialBalanceDocument>(key: K): ITrialBalanceDocument[K];
}

export interface IImmutableTrialBalanceValueAgreement extends Map<string, any> {
  toJS(): ITrialBalanceValueAgreement;
  get<K extends keyof ITrialBalanceValueAgreement>(key: K): ITrialBalanceValueAgreement[K];
}

export interface IImmutableSummaryEntity extends Map<string, any> {
  toJS(): ISummaryEntity;
  get<K extends keyof ISummaryEntity>(key: K): ISummaryEntity[K];
}

export interface TestClient extends NameEntity {
  legalEntities: TestLegalEntity[];
}

export interface TestLegalEntity extends NameEntity {
  auditPeriods: TestAuditPeriod[];
}

export interface TestAuditPeriod extends NameEntity {
  buildings: TestAgreementGroup[];
  tenants: TestAgreementGroup[];
  credits: TestAgreementGroup[];
  trialBalanceDocument: NameEntity;
}

export interface TestAgreementGroup extends NameEntity {
  type: string;
  agreements: TestAgreement[];
}

export interface TestAgreement extends NameEntity {
  factSheetType: string;
}
export interface NameEntity {
  id: string;
  name: string;
  inserted: string;
  lastUpdated: string;
}

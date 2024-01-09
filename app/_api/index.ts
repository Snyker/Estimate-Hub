import { estimateApi as api } from "./config/index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    usersControllerCreate: build.mutation<
      UsersControllerCreateApiResponse,
      UsersControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users`,
        method: "POST",
        body: queryArg.createUserDto,
      }),
    }),
    usersControllerFindAll: build.query<
      UsersControllerFindAllApiResponse,
      UsersControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users`,
        params: {
          page: queryArg.page,
          limit: queryArg.limit,
          filters: queryArg.filters,
          sort: queryArg.sort,
        },
      }),
    }),
    usersControllerFindOne: build.query<
      UsersControllerFindOneApiResponse,
      UsersControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/users/${queryArg.id}` }),
    }),
    usersControllerUpdate: build.mutation<
      UsersControllerUpdateApiResponse,
      UsersControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateUserDto,
      }),
    }),
    usersControllerRemove: build.mutation<
      UsersControllerRemoveApiResponse,
      UsersControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    filesControllerUploadFile: build.mutation<
      FilesControllerUploadFileApiResponse,
      FilesControllerUploadFileApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/files/upload`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    authControllerLogin: build.mutation<
      AuthControllerLoginApiResponse,
      AuthControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/email/login`,
        method: "POST",
        body: queryArg.authEmailLoginDto,
      }),
    }),
    authControllerRegister: build.mutation<
      AuthControllerRegisterApiResponse,
      AuthControllerRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/email/register`,
        method: "POST",
        body: queryArg.authRegisterLoginDto,
      }),
    }),
    authControllerConfirmEmail: build.mutation<
      AuthControllerConfirmEmailApiResponse,
      AuthControllerConfirmEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/email/confirm`,
        method: "POST",
        body: queryArg.authConfirmEmailDto,
      }),
    }),
    authControllerForgotPassword: build.mutation<
      AuthControllerForgotPasswordApiResponse,
      AuthControllerForgotPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/forgot/password`,
        method: "POST",
        body: queryArg.authForgotPasswordDto,
      }),
    }),
    authControllerResetPassword: build.mutation<
      AuthControllerResetPasswordApiResponse,
      AuthControllerResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/reset/password`,
        method: "POST",
        body: queryArg.authResetPasswordDto,
      }),
    }),
    authControllerMe: build.query<
      AuthControllerMeApiResponse,
      AuthControllerMeApiArg
    >({
      query: () => ({ url: `/api/v1/auth/me` }),
    }),
    authControllerUpdate: build.mutation<
      AuthControllerUpdateApiResponse,
      AuthControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/me`,
        method: "PATCH",
        body: queryArg.authUpdateDto,
      }),
    }),
    authControllerDelete: build.mutation<
      AuthControllerDeleteApiResponse,
      AuthControllerDeleteApiArg
    >({
      query: () => ({ url: `/api/v1/auth/me`, method: "DELETE" }),
    }),
    authControllerRefresh: build.mutation<
      AuthControllerRefreshApiResponse,
      AuthControllerRefreshApiArg
    >({
      query: () => ({ url: `/api/v1/auth/refresh`, method: "POST" }),
    }),
    authControllerLogout: build.mutation<
      AuthControllerLogoutApiResponse,
      AuthControllerLogoutApiArg
    >({
      query: () => ({ url: `/api/v1/auth/logout`, method: "POST" }),
    }),
    authFacebookControllerLogin: build.mutation<
      AuthFacebookControllerLoginApiResponse,
      AuthFacebookControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/facebook/login`,
        method: "POST",
        body: queryArg.authFacebookLoginDto,
      }),
    }),
    authGoogleControllerLogin: build.mutation<
      AuthGoogleControllerLoginApiResponse,
      AuthGoogleControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/google/login`,
        method: "POST",
        body: queryArg.authGoogleLoginDto,
      }),
    }),
    authTwitterControllerLogin: build.mutation<
      AuthTwitterControllerLoginApiResponse,
      AuthTwitterControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/twitter/login`,
        method: "POST",
        body: queryArg.authTwitterLoginDto,
      }),
    }),
    authAppleControllerLogin: build.mutation<
      AuthAppleControllerLoginApiResponse,
      AuthAppleControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/apple/login`,
        method: "POST",
        body: queryArg.authAppleLoginDto,
      }),
    }),
    homeControllerAppInfo: build.query<
      HomeControllerAppInfoApiResponse,
      HomeControllerAppInfoApiArg
    >({
      query: () => ({ url: `/` }),
    }),
    projectsControllerCreate: build.mutation<
      ProjectsControllerCreateApiResponse,
      ProjectsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/projects`,
        method: "POST",
        body: queryArg.createProjectDto,
      }),
    }),
    projectsControllerFindAll: build.query<
      ProjectsControllerFindAllApiResponse,
      ProjectsControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/v1/projects` }),
    }),
    projectsControllerFindOne: build.query<
      ProjectsControllerFindOneApiResponse,
      ProjectsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/projects/${queryArg.id}` }),
    }),
    projectsControllerUpdate: build.mutation<
      ProjectsControllerUpdateApiResponse,
      ProjectsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/projects/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateProjectDto,
      }),
    }),
    projectsControllerRemove: build.mutation<
      ProjectsControllerRemoveApiResponse,
      ProjectsControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/projects/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    featuresControllerCreate: build.mutation<
      FeaturesControllerCreateApiResponse,
      FeaturesControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/features`,
        method: "POST",
        body: queryArg.createFeatureDto,
      }),
    }),
    featuresControllerFindAll: build.query<
      FeaturesControllerFindAllApiResponse,
      FeaturesControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/v1/features` }),
    }),
    featuresControllerFindOne: build.query<
      FeaturesControllerFindOneApiResponse,
      FeaturesControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/features/${queryArg.id}` }),
    }),
    featuresControllerUpdate: build.mutation<
      FeaturesControllerUpdateApiResponse,
      FeaturesControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/features/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateFeatureDto,
      }),
    }),
    featuresControllerRemove: build.mutation<
      FeaturesControllerRemoveApiResponse,
      FeaturesControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/features/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    elementsControllerCreate: build.mutation<
      ElementsControllerCreateApiResponse,
      ElementsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/elements`,
        method: "POST",
        body: queryArg.createElementDto,
      }),
    }),
    elementsControllerFindAllByUser: build.query<
      ElementsControllerFindAllByUserApiResponse,
      ElementsControllerFindAllByUserApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/elements/user/${queryArg.id}`,
        params: { page: queryArg.page, limit: queryArg.limit },
      }),
    }),
    elementsControllerFindAllByProject: build.query<
      ElementsControllerFindAllByProjectApiResponse,
      ElementsControllerFindAllByProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/elements/project/${queryArg.id}`,
        params: { page: queryArg.page, limit: queryArg.limit },
      }),
    }),
    elementsControllerFindAllByFeature: build.query<
      ElementsControllerFindAllByFeatureApiResponse,
      ElementsControllerFindAllByFeatureApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/elements/feature/${queryArg.id}`,
        params: { page: queryArg.page, limit: queryArg.limit },
      }),
    }),
    elementsControllerFindOne: build.query<
      ElementsControllerFindOneApiResponse,
      ElementsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/elements/${queryArg.id}` }),
    }),
    elementsControllerUpdate: build.mutation<
      ElementsControllerUpdateApiResponse,
      ElementsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/elements/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateElementDto,
      }),
    }),
    elementsControllerRemove: build.mutation<
      ElementsControllerRemoveApiResponse,
      ElementsControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/elements/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as EstimateHubApi };
export type UsersControllerCreateApiResponse = unknown;
export type UsersControllerCreateApiArg = {
  createUserDto: CreateUserDto;
};
export type UsersControllerFindAllApiResponse = unknown;
export type UsersControllerFindAllApiArg = {
  page?: number;
  limit?: number;
  filters?: string;
  sort?: string;
};
export type UsersControllerFindOneApiResponse = unknown;
export type UsersControllerFindOneApiArg = {
  id: string;
};
export type UsersControllerUpdateApiResponse = unknown;
export type UsersControllerUpdateApiArg = {
  id: number;
  updateUserDto: UpdateUserDto;
};
export type UsersControllerRemoveApiResponse = unknown;
export type UsersControllerRemoveApiArg = {
  id: number;
};
export type FilesControllerUploadFileApiResponse = unknown;
export type FilesControllerUploadFileApiArg = {
  body: {
    file?: Blob;
  };
};
export type AuthControllerLoginApiResponse =
  /** status 200  */ LoginResponseType;
export type AuthControllerLoginApiArg = {
  authEmailLoginDto: AuthEmailLoginDto;
};
export type AuthControllerRegisterApiResponse = unknown;
export type AuthControllerRegisterApiArg = {
  authRegisterLoginDto: AuthRegisterLoginDto;
};
export type AuthControllerConfirmEmailApiResponse = unknown;
export type AuthControllerConfirmEmailApiArg = {
  authConfirmEmailDto: AuthConfirmEmailDto;
};
export type AuthControllerForgotPasswordApiResponse = unknown;
export type AuthControllerForgotPasswordApiArg = {
  authForgotPasswordDto: AuthForgotPasswordDto;
};
export type AuthControllerResetPasswordApiResponse = unknown;
export type AuthControllerResetPasswordApiArg = {
  authResetPasswordDto: AuthResetPasswordDto;
};
export type AuthControllerMeApiResponse = unknown;
export type AuthControllerMeApiArg = void;
export type AuthControllerUpdateApiResponse = unknown;
export type AuthControllerUpdateApiArg = {
  authUpdateDto: AuthUpdateDto;
};
export type AuthControllerDeleteApiResponse = unknown;
export type AuthControllerDeleteApiArg = void;
export type AuthControllerRefreshApiResponse = unknown;
export type AuthControllerRefreshApiArg = void;
export type AuthControllerLogoutApiResponse = unknown;
export type AuthControllerLogoutApiArg = void;
export type AuthFacebookControllerLoginApiResponse = unknown;
export type AuthFacebookControllerLoginApiArg = {
  authFacebookLoginDto: AuthFacebookLoginDto;
};
export type AuthGoogleControllerLoginApiResponse = unknown;
export type AuthGoogleControllerLoginApiArg = {
  authGoogleLoginDto: AuthGoogleLoginDto;
};
export type AuthTwitterControllerLoginApiResponse = unknown;
export type AuthTwitterControllerLoginApiArg = {
  authTwitterLoginDto: AuthTwitterLoginDto;
};
export type AuthAppleControllerLoginApiResponse = unknown;
export type AuthAppleControllerLoginApiArg = {
  authAppleLoginDto: AuthAppleLoginDto;
};
export type HomeControllerAppInfoApiResponse = unknown;
export type HomeControllerAppInfoApiArg = void;
export type ProjectsControllerCreateApiResponse = /** status 201  */ Project;
export type ProjectsControllerCreateApiArg = {
  createProjectDto: CreateProjectDto;
};
export type ProjectsControllerFindAllApiResponse = unknown;
export type ProjectsControllerFindAllApiArg = void;
export type ProjectsControllerFindOneApiResponse = unknown;
export type ProjectsControllerFindOneApiArg = {
  id: string;
};
export type ProjectsControllerUpdateApiResponse = /** status 200  */ Project;
export type ProjectsControllerUpdateApiArg = {
  id: string;
  updateProjectDto: UpdateProjectDto;
};
export type ProjectsControllerRemoveApiResponse = unknown;
export type ProjectsControllerRemoveApiArg = {
  id: string;
};
export type FeaturesControllerCreateApiResponse = /** status 201  */ Feature;
export type FeaturesControllerCreateApiArg = {
  createFeatureDto: CreateFeatureDto;
};
export type FeaturesControllerFindAllApiResponse = /** status 200  */ Feature[];
export type FeaturesControllerFindAllApiArg = void;
export type FeaturesControllerFindOneApiResponse = /** status 200  */ Feature;
export type FeaturesControllerFindOneApiArg = {
  id: string;
};
export type FeaturesControllerUpdateApiResponse = /** status 200  */ Feature;
export type FeaturesControllerUpdateApiArg = {
  id: string;
  updateFeatureDto: UpdateFeatureDto;
};
export type FeaturesControllerRemoveApiResponse = unknown;
export type FeaturesControllerRemoveApiArg = {
  id: string;
};
export type ElementsControllerCreateApiResponse = /** status 201  */ Element;
export type ElementsControllerCreateApiArg = {
  createElementDto: CreateElementDto;
};
export type ElementsControllerFindAllByUserApiResponse =
  /** status 200  */ Element[];
export type ElementsControllerFindAllByUserApiArg = {
  id: string;
  page?: number;
  limit?: number;
};
export type ElementsControllerFindAllByProjectApiResponse =
  /** status 200  */ Element[];
export type ElementsControllerFindAllByProjectApiArg = {
  id: string;
  page?: number;
  limit?: number;
};
export type ElementsControllerFindAllByFeatureApiResponse =
  /** status 200  */ Element[];
export type ElementsControllerFindAllByFeatureApiArg = {
  id: string;
  page?: number;
  limit?: number;
};
export type ElementsControllerFindOneApiResponse = /** status 200  */ Element;
export type ElementsControllerFindOneApiArg = {
  id: string;
};
export type ElementsControllerUpdateApiResponse = /** status 200  */ Element;
export type ElementsControllerUpdateApiArg = {
  id: string;
  updateElementDto: UpdateElementDto;
};
export type ElementsControllerRemoveApiResponse = unknown;
export type ElementsControllerRemoveApiArg = {
  id: string;
};
export type FileEntity = {
  id: string;
};
export type Role = {
  id: number;
  name: string;
};
export type Status = {
  id: number;
  name: string;
};
export type CreateUserDto = {
  email: object;
  password: string;
  firstName: object;
  lastName: object;
  photo: FileEntity;
  role: Role;
  status: Status;
};
export type UpdateUserDto = {
  email?: object;
  password?: string;
  firstName?: object;
  lastName?: object;
  photo?: FileEntity;
  role?: Role;
  status?: Status;
};
export type User = {};
export type LoginResponseType = {
  /** Token utilisateur */
  token: string;
  refreshToken?: string | null;
  tokenExpires?: number;
  /** Données utilisateur */
  user: User;
};
export type AuthEmailLoginDto = {
  email: string;
  password: string;
};
export type AuthRegisterLoginDto = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
export type AuthConfirmEmailDto = {
  hash: string;
};
export type AuthForgotPasswordDto = {
  email: string;
};
export type AuthResetPasswordDto = {
  password: string;
  hash: string;
};
export type AuthUpdateDto = {
  photo: FileEntity;
  firstName: string;
  lastName: string;
  password: string;
  oldPassword: string;
};
export type AuthFacebookLoginDto = {
  accessToken: string;
};
export type AuthGoogleLoginDto = {
  idToken: string;
};
export type AuthTwitterLoginDto = {
  accessTokenKey: string;
  accessTokenSecret: string;
};
export type AuthAppleLoginDto = {
  idToken: string;
  firstName?: string;
  lastName?: string;
};
export type Currencies = {
  id: number;
  name: string;
  symbol: string;
};
export type Periods = {
  id: number;
  name: string;
};
export type Element = {
  /** ID de l'élement */
  id: number;
  name: string;
  description?: string | null;
  period: Periods;
  currency: Currencies;
  estimatedTime: number;
  estimatedAmount: number;
  /** Date de création */
  createdAt: string;
  /** Date de mise à jour */
  updatedAt: string;
};
export type Feature = {
  /** ID de la feature */
  id: number;
  /** Nom de la feature */
  name: string;
  /** Description de la feature */
  description?: string | null;
  /** Période de la feature */
  period: Periods;
  /** Monnaie de la feature */
  currency: Currencies;
  /** Temps estimé en fonction des elements */
  estimatedTime: number;
  /** Coûts estimé en fonction des elements */
  estimatedAmount: number;
  /** Liste des élèments associés à la feature */
  elements: Element[];
  /** Date de création */
  createdAt: string;
  /** Date de mise à jour */
  updatedAt: string;
};
export type Project = {
  /** ID du projet */
  id: number;
  /** Nom du projet */
  name: string;
  /** Résumé du projet */
  summary: string;
  /** Format de Monnaie et d'utilisation dans le projet */
  currency: Currencies;
  /** Format temporel d'utilisation dans le projet */
  period: Periods;
  /** Calcul total des items du projet en brut */
  total: number;
  /** Calcul total des items du projet en net */
  netTotal: number;
  /** Temps estimé total du projet */
  duration: number;
  /** Liste des éléments */
  elements: Element[];
  /** Liste des fonctionnalités */
  features: Feature[];
  /** Date de création */
  createdAt: string;
  /** Date de mise à jour */
  updatedAt: string;
};
export type CreateElementDto = {
  name: string;
  description?: string | null;
  /** ID de la monnaie */
  currencyId: number;
  /** ID de la periode */
  periodId: number;
  /** Le temps estimé selon la période */
  estimatedTime: number;
  /** Le coût estimé selon la monnaie */
  estimatedAmount: number;
  /** ID de l'utilisateur */
  userId?: number;
  projectId?: number;
  featureId?: number;
};
export type CreateFeatureDto = {
  /** Nom de la feature */
  name: string;
  /** Description de la feature */
  description?: string | null;
  /** ID de la monnaie */
  currencyId: number;
  /** ID de la periode */
  periodId: number;
  elements: (number | CreateElementDto)[];
};
export type CreateProjectDto = {
  /** Nom du projet */
  name: string;
  /** Résumé du projet */
  summary: string;
  /** ID de la monnaie */
  currencyId: number;
  /** ID de la periode */
  periodId: number;
  elements: (number | CreateElementDto)[];
  features: (number | CreateFeatureDto)[];
};
export type UpdateProjectDto = {
  /** Résumé du projet */
  summary?: string;
  /** ID de la monnaie */
  currencyId?: number;
  /** ID de la periode */
  periodId?: number;
  elements?: (number | CreateElementDto)[];
  features?: (number | CreateFeatureDto)[];
};
export type UpdateFeatureDto = {
  /** Nom de la feature */
  name?: string;
  /** Description de la feature */
  description?: string | null;
  /** ID de la monnaie */
  currencyId?: number;
  /** ID de la periode */
  periodId?: number;
  elements?: (number | CreateElementDto)[];
};
export type UpdateElementDto = {
  name?: string;
  description?: string | null;
  /** ID de la monnaie */
  currencyId?: number;
  /** ID de la periode */
  periodId?: number;
  /** Le temps estimé selon la période */
  estimatedTime?: number;
  /** Le coût estimé selon la monnaie */
  estimatedAmount?: number;
  /** ID de l'utilisateur */
  userId?: number;
  projectId?: number;
  featureId?: number;
};
export const {
  useUsersControllerCreateMutation,
  useUsersControllerFindAllQuery,
  useUsersControllerFindOneQuery,
  useUsersControllerUpdateMutation,
  useUsersControllerRemoveMutation,
  useFilesControllerUploadFileMutation,
  useAuthControllerLoginMutation,
  useAuthControllerRegisterMutation,
  useAuthControllerConfirmEmailMutation,
  useAuthControllerForgotPasswordMutation,
  useAuthControllerResetPasswordMutation,
  useAuthControllerMeQuery,
  useAuthControllerUpdateMutation,
  useAuthControllerDeleteMutation,
  useAuthControllerRefreshMutation,
  useAuthControllerLogoutMutation,
  useAuthFacebookControllerLoginMutation,
  useAuthGoogleControllerLoginMutation,
  useAuthTwitterControllerLoginMutation,
  useAuthAppleControllerLoginMutation,
  useHomeControllerAppInfoQuery,
  useProjectsControllerCreateMutation,
  useProjectsControllerFindAllQuery,
  useProjectsControllerFindOneQuery,
  useProjectsControllerUpdateMutation,
  useProjectsControllerRemoveMutation,
  useFeaturesControllerCreateMutation,
  useFeaturesControllerFindAllQuery,
  useFeaturesControllerFindOneQuery,
  useFeaturesControllerUpdateMutation,
  useFeaturesControllerRemoveMutation,
  useElementsControllerCreateMutation,
  useElementsControllerFindAllByUserQuery,
  useElementsControllerFindAllByProjectQuery,
  useElementsControllerFindAllByFeatureQuery,
  useElementsControllerFindOneQuery,
  useElementsControllerUpdateMutation,
  useElementsControllerRemoveMutation,
} = injectedRtkApi;

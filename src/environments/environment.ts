/**
 * Environment configuration for production.
 * Contains API endpoints and settings for the learning center application.
 */
export const environment = {
  production: true,
  platformProviderApiBaseUrl: 'https://lc2025201asi07297327.free.beeceptor.com/api/v1',
  platformProviderCategoriesEndpointPath: '/categories',
  platformProviderCoursesEndpointPath: '/courses',
  platformProviderSignInEndpointPath: '/authentication/sign-in',
  platformProviderSignUpEndpointPath: '/authentication/sign-up',
};

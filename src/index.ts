export { generateFormatCacheKey, friendlyJSONstringify } from './utils'
export { Path, PathValue } from './path'
export { createParser, Parser } from './message/parser'
export {
  CompileError,
  CompileDomain,
  CompileErrorCodes
} from './message/errors'
export { CompileOptions, CompileErrorHandler } from './message/options'
export { baseCompile, compile, clearCompileCache } from './message/compiler'
export {
  MessageFunction,
  MessageFunctions,
  PluralizationRule,
  LinkedModifiers
} from './message/runtime'
export * from './core'
export {
  MissingHandler,
  ComposerOptions,
  Composer,
  CustomBlocks
} from './composer'
export {
  TranslateResult,
  Choice,
  LocaleMessageObject,
  PluralizationRulesMap,
  WarnHtmlInMessageLevel,
  DateTimeFormatResult,
  NumberFormatResult,
  Formatter,
  VueI18nOptions,
  VueI18n
} from './legacy'
export {
  createI18n,
  useI18n,
  I18nOptions,
  I18nAdditionalOptions,
  I18n,
  I18nMode,
  I18nScope,
  ComposerAdditionalOptions,
  UseI18nOptions
} from './i18n'
export {
  Translation,
  TranslationProps,
  NumberFormat,
  NumberFormatProps,
  DatetimeFormat,
  DatetimeFormatProps,
  FormattableProps,
  BaseFormatProps,
  ComponetI18nScope
} from './components'
export { I18nPluginOptions } from './plugin'

/**
 * vue-i18n version
 */
export const VERSION = __VERSION__

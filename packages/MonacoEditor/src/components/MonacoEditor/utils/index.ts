export type Language = 'json' | 'yaml' | 'javascript' | 'typescript' | 'html';

export const getFileExtensionByLanguage = (language: Language) => {
  switch (language) {
    case 'javascript':
      return 'jsx';
    case 'typescript':
      return 'tsx';
    default:
      return language;
  }
};


export const hackWindowError = () => {
  /**
   * HACK: 通过 hack 方式临时解决设置 inline suggestions 后 monaco editor 报错的问题
   * https://github.com/microsoft/monaco-editor/issues/2382
   */
  window.addEventListener('unhandledrejection', function(event) {
    if (event.reason && event.reason.name === 'Canceled') {
      // monaco editor promise cancelation
      event.preventDefault();
    }
  });
}


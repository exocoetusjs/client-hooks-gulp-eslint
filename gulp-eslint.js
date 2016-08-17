/*******************************************************************************
*                        _                       _ _       _                   *
*             __ _ _   _| |_ __         ___  ___| (_)_ __ | |_                 *
*            / _` | | | | | '_ \ _____ / _ \/ __| | | '_ \| __|                *
*           | (_| | |_| | | |_) |_____|  __/\__ \ | | | | | |_                 *
*            \__, |\__,_|_| .__/       \___||___/_|_|_| |_|\__|                *
*            |___/        |_|                                                  *
*                                                                              *
*      [github repo](https://github.com/crux-wild/client-hooks-gulp-eslint)    *
*                                                                              *
*******************************************************************************/
module.exports = {
  /**
   * @see https://github.com/gulpjs/gulp
   */
  gulp: {
    /**
     * @see
     * https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpsrcglobs-options
     */
    src: {
      /**
       * @type { String | Array }
       *
       * Glob or array of globs to read. Globs use [node-glob syntax] except
       * that negation is fully supported.
       *
       * A glob that begins with `!` excludes matching files from the glob
       * results up to that point. For example, consider this directory
       * structure:
       * ```
       * client/
       *   a.js
       *   bob.js
       *   bad.js
       * ```
       *
       * The following expression matches `a.js` and `bad.js`:
       * ```javascript
       * ['client/*.js', '!client/b*.js', 'client/bad.js']
       * ```
       *
       * [node-glob]: https://github.com/isaacs/node-glob
       */
      globs: ['**/*.js', '!node_modules/**'],
      /**
       * @type {Object}
       *
       * Options to pass to [node-glob] through [glob-stream].
       *
       * gulp supports all options supported by node-glob and glob-stream except
       * `ignore` and adds the following options.
       *
       * [node-glob]: https://github.com/isaacs/node-glob
       * [glob-stream]: https://github.com/gulpjs/glob-stream
       */
      options: {
        /**
         * @type {Boolean}
         *
         * Setting this to `false` will return `file.contents` as a stream and
         * not buffer files. This is useful when working with large files.
         * **Note**: Plugins might not implement support for streams.
         */
        buffer: true,
        /**
         * @type {Boolean}
         *
         * Setting this to `false` will return `file.contents` as a stream and
         * not buffer files. This is useful when working with large files.
         * **Note:** Plugins might not implement support for streams.
         */
        read: true,
        /**
         * @type {String}
         *
         * Default: everything before a glob starts (see [glob2base])
         * E.g., consider `somefile.js` in `client/js/somedir`.
         *
         * [glob2base]: https://github.com/wearefractal/glob2base
         */
        base: '',
        /**
         * @type {String}
         *
         * If you only need to specify a `cwd `for a certain `glob`.
         */
        cwd: process.cwd(),
        /**
         * @type {Boolean}
         *
         * When `true` it is the same as saying `opt.base = opt.cwd`.
         */
        cwdbase: false,
        /**
         * @type {Boolean}
         *
         * If `true`, won't emit an error when a `glob` pointing at a single
         * file fails to match.
         */
        allowEmpty: false,
      },
      /**
       * @see https://github.com/adametry/gulp-eslint
       */
      eslint: {
        constructor: {
          /**
           * @type {Object}
           *
           * Set [configuration] of [rules].
           *
           * [rules]: http://eslint.org/docs/rules/
           * [configuration]: http://eslint.org/docs/user-guide/configuring#configuring-rules
           */
          rules: {},
          /**
           * @type {Array}
           *
           * Specify [globals].
           *
           * ```javascript
           * {
           *   'globals': ['jQuery', '$']
           * }
           * ```
           *
           * [globals]: http://eslint.org/docs/user-guide/configuring#specifying-globals
           */
          globals: {},
          /**
           * @type {Boolean}
           *
           * This option instructs ESLint to try to fix as many issues as
           * possible. The fixes are applied to the gulp stream. The fixed
           * content can be saved to file using `gulp.dest` (See [example/fix.js]).
           * Rules that are fixable can be found in ESLint's [rules list].
           *
           * When fixes are applied, a "fixed" property is set to `true` on the
           * fixed file's ESLint result.
           *
           * [rules list]: http://eslint.org/docs/rules/
           * [example/fix.js]: https://github.com/adametry/gulp-eslint/blob/master/example/fix.js.
           */
          fix: false,
          /**
           * @type {Boolean}
           *
           * When `true`, this option will filter warning messages from ESLint
           * results. This mimics the ESLint CLI [quiet option].
           *
           * [quiet option](http://eslint.org/docs/user-guide/command-line-interface#quiet).
           */
          quiet: false,
          /**
           * @type {Array}
           *
           * Specify a list of [environments] to be applied.
           *
           * [environments]: http://eslint.org/docs/user-guide/configuring#specifying-environments
           */
          envs: [],
          /**
           * @type {Array}
           * This option allows you to specify additional directories from which
           * to load rules files. This is useful when you have custom rules that
           * aren't suitable for being bundled with ESLint. This option works
           * much like the ESLint CLI's [rulesdir option].
           *
           * [rulesdir option]: http://eslint.org/docs/user-guide/command-line-interface#rulesdir
           */
          rulePaths: [],
          /**
           * @type {String}
           *
           * Path to the ESLint rules configuration file. For more information,
           * see the ESLint CLI [config option] and [Using Configuration Files].
           *
           * [config option]: http://eslint.org/docs/user-guide/command-line-interface#c-config
           * [Using Configuration Files]: http://eslint.org/docs/user-guide/configuring#using-configuration-files
           */
          configFile: '',
          /**
           * @type {Boolean}
           *
           * When `true`, add a result warning when ESLint ignores a file. This
           * can be used to file files that are needlessly being loaded by
           * `gulp.src`. For example, since ESLint automatically ignores
           * "node_modules" file paths and gulp.src does not, a gulp task may
           * take seconds longer just reading files from the "node_modules"
           * directory.
           */
          warnFileIgnored: false,
          /**
           * @type {Boolean}
           * When `false`, ESLint will not load [.eslintrc files].
           * [.eslintrc files]: http://eslint.org/docs/user-guide/configuring#using-configuration-files
           */
          useEslintrc: true,
        },
      }
    }
  }
};

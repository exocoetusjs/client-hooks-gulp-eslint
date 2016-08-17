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
       *
       * ```
       * client/
       *   a.js
       *   bob.js
       *   bad.js
       * ```
       * The following expression matches `a.js` and `bad.js`:
       *
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
      },
    }
  }
};

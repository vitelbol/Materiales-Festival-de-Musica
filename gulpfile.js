import {src, dest} from 'gulp'
import * as dartSass from 'sass'
import gulpSaas from 'gulp-sass'

const sass =gulpSaas(dartSass)

export function css(done)
{
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'))
    done()
}
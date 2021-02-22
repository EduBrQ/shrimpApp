const gulp = require("gulp"),
  ts = require("gulp-typescript"),
  nodemon = require("gulp-nodemon");

gulp.task("copy-yaml", () => {
  const COPY_YAML = ["src/ui/swagger/*.yaml"];
  return gulp.src(COPY_YAML).pipe(gulp.dest("dist/src/ui/swagger"));
});

// COPY FILES
gulp.task("copy-files", () => {
  const COPY_FILES = ["package.json"];
  return gulp.src(COPY_FILES).pipe(gulp.dest("dist"));
});

// WATCH
gulp.task("watch", (done) => {
  gulp.watch("./**/*.ts");
  nodemon({
    script: "dist/server.js",
    tasks: ["build"],
    ext: "ts json",
    ignore: ["node_modules/", "package.json", "tsconfig.json"],
  })
    .on("restart", () => {
      console.log(
        "##################################### // ######################################"
      );
      console.log(
        "########################### (0/ Server restarted... ###########################"
      );
    })
    .on("crash", function () {
      console.error("Application has crashed!");
    });
  done();
});

// BUILD DEFAULT
gulp.task(
  "build",
  gulp.series(["copy-files", "copy-yaml"], function compiler() {
    const tsProject = ts.createProject("tsconfig.json", {
      typescript: require("typescript"),
    });
    return tsProject
      .src()
      .pipe(tsProject())
      .js.pipe(gulp.dest("dist"))
      .on("error", (err) => {
        console.error("Build error:", err.message);
        // process.exit(1)
      });
  })
);

// BUILD DEV
gulp.task("dev", gulp.series(["build", "watch"]));

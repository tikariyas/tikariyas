TIKARIYA ATTENDANCE - Android project

1. Upload ALL files and folders of this ZIP to your GitHub repository
   (including the hidden .github folder, and debug.keystore).
   If .github does not upload, create the file  .github/workflows/build.yml
   on GitHub and paste the contents of build-workflow-copy.yml into it.
2. Open the Actions tab -> Build APK -> wait for the green tick (5-10 min).
3. Open the finished run -> Artifacts -> download app-debug -> unzip -> app-debug.apk
4. Send the APK to your phone and install it.

Keep debug.keystore safe: every update must be built with the same file,
otherwise Android will not install the update over the old app.
Always download a backup from the Backup tab before updating.

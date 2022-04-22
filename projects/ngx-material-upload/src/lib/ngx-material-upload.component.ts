import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'ngx-material-upload',
  templateUrl: './ngx-material-upload.component.html',
  styles: [],
})
export class NgxMaterialUploadComponent implements OnInit {
  /**
   * the reference to the given file input
   * @private
   */
  @ViewChild('file')
  public _fileInputRef!: ElementRef;

  /**
   * the list of the selected files or a single file
   */
  public selectedFiles!: FileList | undefined;

  /**
   * text for the remove files button, if files are selected
   */
  @Input()
  public removeFilesButtonText: string = 'Remove files';

  /**
   * the text to select files
   */
  @Input()
  public fileSelectionText: string = 'Select File(s)';

  /**
   * the text for the file selection button
   */
  @Input()
  public fileSelectionButtonText: string = 'Select File(s)';

  /**
   * the upload files button text
   */
  @Input()
  public uploadFilesButtonText: string = 'Upload File(s)';

  /**
   * is the user allowed to upload and select multiple files?
   */
  @Input()
  public enableMultiFileSelection = true;

  /**
   * which file type should be enabled?
   */
  @Input()
  public acceptedFileTypes: string = '*.*';

  /**
   * use this flag to display the upload button.
   */
  @Input()
  public enableDirectUploadButton: boolean = true;

  /**
   * event if the files should be uploaded
   */
  @Output()
  public uploadFilesClicked: EventEmitter<FileList> = new EventEmitter<FileList>();

  /**
   * event if the selected files changed
   */
  @Output()
  public selectedFilesChanged: EventEmitter<FileList> = new EventEmitter<FileList>();

  /**
   * a somehow template text to display the file count. Use the pattern `[*count*]` to display the count
   */
  @Input()
  public selectedFileCountTemplate = '[*count*] files selected';

  /**
   * the text to display if files are selected
   */
  public selectedFileText: string = '';

  constructor() {}

  public ngOnInit(): void {}

  /**
   *
   * event is called if the file selection was changed or cleared
   * @param event
   */
  public fileInputSelectionChanged(event?: Event): void {
    this.selectedFiles = (event?.target as any)?.files;
    this.selectedFilesChanged.emit(this.selectedFiles);

    if (this.selectedFiles) {
      this.selectedFileText =
        this.selectedFiles.length === 1
          ? this.selectedFiles[0].name
          : this.selectedFileCountTemplate.replace(
              '[*count*]',
              this.selectedFiles.length.toString()
            );
    } else {
      this.selectedFileText = '';
      this._resetFileInput();
    }
  }

  /**
   * emitter for direct upload
   */
  public upload(): void {
    this.uploadFilesClicked.emit(this.selectedFiles);
    this._resetFileInput();
  }

  /**
   * resets the file input to empty
   * @private
   */
  private _resetFileInput(): void {
    this._fileInputRef.nativeElement.value = '';
  }
}

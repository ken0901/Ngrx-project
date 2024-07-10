import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { popularTagsActions } from "./store/action";
import { combineLatest } from "rxjs";
import { selectError, selectIsLoading, selectPopularTagsData } from "./store/reducers";
import { LoadingComponent } from "../loading/loading.component";
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-popular-tags',
    templateUrl: './popular-tags.component.html',
    standalone: true,
    imports: [LoadingComponent, ErrorMessageComponent, CommonModule, RouterLink]
})
export class PopularTagsComponent implements OnInit {
    data$ = combineLatest({
        popularTags: this.store.select(selectPopularTagsData),
        isLoading: this.store.select(selectIsLoading),
        error: this.store.select(selectError)
    });
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(popularTagsActions.getPopularTags());
    }
}
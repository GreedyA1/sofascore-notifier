import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, forkJoin, map, of, switchMap, tap } from 'rxjs';
import { Root, Event, RootStatistics, Statistic } from './types';

@Component({
  selector: 'sofascorer-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sofascore-notifier';

  liveEvents$: Observable<Event[]> = this.http.get<Root>('https://api.sofascore.com/api/v1/sport/football/events/live').pipe(  
    map(root => root.events),
    tap(events => console.log('ALL EVENTS',events.length)),
    map(a => a.filter(b => b.hasXg)),
    tap(events => console.log('hasXg',events.length)),
    switchMap((events: Event[]) => {
      // Assuming the firstResponse contains an array of URLs for subsequent requests
      const subsequentRequests = events.map((event) =>
        this.http.get<RootStatistics>(`https://api.sofascore.com/api/v1/event/${event.id}/statistics`).pipe(map(rootStatistics => rootStatistics.statistics),catchError((error) => {
          return of<Statistic[]>([])
        }))
      );
      // Use forkJoin to wait for all subsequent requests to complete
      return forkJoin(subsequentRequests).pipe(
        map((responses) => {
          // Combine or process the data as needed'
          return events.map((e,index) => ({
            ...e,
            statistics: responses[index]
          }))
        })
      );
    })
  );

  
  
  // this.http.get<Root>('https://api.sofascore.com/api/v1/sport/football/events/live')
  // .pipe(
  //   map(root => root.events),
  //   map(a => a.filter(b => b.hasXg)),
  //   switchMap(eventsWithXg => {
  //     let myArray: Observable<Statistic[]>[] = []
  //     eventsWithXg.forEach(event => {
  //       myArray.push(
  //         this.http.get<RootStatistics>(`https://api.sofascore.com/api/v1/event/${event.id}/statistics`
  //         ).pipe(
  //           map(root => root.statistics)
  //         ))
  //     })
  //     return combineLatest(myArray)
  //   })
  // )
    

  constructor(private http: HttpClient) {
    console.log('YO YOOO YOOO more')
    console.log('add test log')
    console.log('add test log')
    console.log('add test log')
    console.log('add test log')
  }
}

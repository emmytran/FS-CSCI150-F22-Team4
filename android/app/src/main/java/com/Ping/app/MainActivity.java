package com.Ping.app;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.community.database.sqlite.CapacitorSQLite;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity
{
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(CapacitorSQLite.class);
    }

      private void add(Class<CapacitorSQLite> capacitorSQLiteClass) {
      }
    });
  }

  private void init(Bundle savedInstanceState, ArrayList<Class<? extends Plugin>> classes) {
  }

  private void add(Class<CapacitorSQLite> capacitorSQLiteClass) {
  }
.
}



